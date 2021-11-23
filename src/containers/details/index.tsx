import React from 'react';
import { useRouter } from 'next/router';

import { useDispatch, useSelector } from 'react-redux';
import { Dispatch, RootState } from '@store/index';

import { Details } from '@views/details';
import { DetailsProps } from '@views/details/details.type';
import { useBreadcrumb } from '@hooks/breadcrumb';

const DetailsContainer = (props: DetailsProps): React.ReactElement => {
  const { BArrowAfter, BArrowBefore, BLogo, BNext } = props.buttons;
  const store = useSelector((state: RootState) => state.store.createHomeDetail);
  const userStore = useSelector((state: RootState) => state.user);
  const addressStore = useSelector(
    (state: RootState) => state.store.createAddress
  );

  const [data, setData] = React.useState(store.homedetail);
  const [files, setFiles] = React.useState<{ image: string }[]>([
    { image: '' },
  ]);
  const [dataValid, setDataValid] = React.useState(store.valid);
  const [formValid, setFormValid] = React.useState(
    Object.values(dataValid).every((item) => item)
  );

  const router = useRouter();

  const { next, previous, paths } = useBreadcrumb();

  const dispatch = useDispatch<Dispatch>();

  React.useEffect(() => {
    next({ title: props.title, url: router.asPath });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.title, router]);

  BLogo.callback = () => {
    router.push('/');
  };

  BArrowBefore.callback = () => {
    previous();
    router.push('/announcement/address');
  };

  BArrowAfter.callback = () => {
    if (formValid) router.push('/announcement/client');
  };

  BNext.callback = () => {
    dispatch.publication.create({
      phone: userStore.user.mobile,
      title: store.homedetail.title,
      home: {
        ...store.homedetail,
        value: store.homedetail.value?.replace(/[^0-9]+/g, ''),
        address: { ...addressStore.address },
      },
    });
    // window.location.replace('/list/announcements');
  };

  const handleFiles = async (file?: File[]) => {
    if (file) {
      const images = await Promise.all(
        file.map(async (file) => {
          const image: string = await new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
              let encoded = reader?.result
                ?.toString()
                .replace(/^data:(.*,)?/, '');
              if (encoded) {
                if (encoded?.length % 4 > 0) {
                  encoded += '='.repeat(4 - (encoded?.length % 4));
                }
                resolve(encoded);
              }
            };
            reader.onerror = (error) => reject(error);
          });
          return { image };
        })
      );
      setFiles(images);
      setData({ ...data, images });
    }
  };

  const handleData = (fieldName: string, value: any) => {
    setData({ ...data, [fieldName]: value });
    dispatch.store.createHomeDetail({
      homedetail: {
        ...data,
        [fieldName]: value,
      },
    });
  };

  const handleValidation = (fieldName: string, value: boolean) => {
    const valid = { ...dataValid, [fieldName]: value };
    setDataValid(valid);
    dispatch.store.createHomeDetail({
      valid,
    });
    setFormValid(Object.values(valid).every((item) => item));
  };

  return (
    <Details
      valid={formValid}
      handleValidation={handleValidation}
      handleData={handleData}
      handleFiles={handleFiles}
      data={data}
      {...props}
      breadCrumb={{ paths }}
    />
  );
};

export default DetailsContainer;
