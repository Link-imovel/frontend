import React from 'react';
import Image from 'next/image';

import { ImageDnDProps } from './imagednd.type';
import { AddPhoto } from '../icons/addphoto';
import { Close } from '../icons/close';
import { colors } from '@theme/theme/default';
import * as S from './imagednd.style';

const ImageDnD = ({ getFiles }: ImageDnDProps): React.ReactElement => {
  const ref = React.useRef<HTMLDivElement>(null);
  const refInput = React.useRef<HTMLInputElement>(null);
  const [drag, setDrag] = React.useState(false);
  const [dragCounter, setDragCounter] = React.useState(0);
  const [files, setFiles] = React.useState<File[]>([]);
  const [imageList, setImageList] = React.useState<React.ReactElement[]>([]);

  const handleDrag = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDragIn = React.useCallback((e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragCounter(1);
    if (e.dataTransfer?.items && e.dataTransfer.items.length > 0) {
      setDrag(true);
    }
  }, []);

  const handleDragOut = React.useCallback(
    (e: DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setDragCounter(0);
      if (dragCounter === 0) {
        setDrag(false);
      }
    },
    [dragCounter]
  );

  const renderImages = React.useCallback(
    (imagesList: React.ReactElement[], files: File[]): React.ReactElement[] => {
      const temp = [...imagesList];
      files?.map((file, i) => {
        temp[i] = (
          <S.ImageWrapper key={i}>
            <S.ButtonContainer>
              <S.RemoveImage onClick={(e) => removeDropFiles(i, e)}>
                <Close fill={colors.orange} />
              </S.RemoveImage>
            </S.ButtonContainer>
            <Image
              className="image-container"
              key={file.name + i}
              width={181}
              height={166}
              alt={file.name}
              src={getFileImage(file)}
            />
          </S.ImageWrapper>
        );
      });
      for (let i = files.length; i < 6; i++) {
        temp[i] = (
          <S.ImageWrapper key={i}>
            <S.NoImage>
              <AddPhoto fill={colors.orange} />
            </S.NoImage>
          </S.ImageWrapper>
        );
      }
      setImageList(temp);
      return imagesList;
    },
    []
  );

  const handleDropFiles = React.useCallback(
    (fileList: FileList) => {
      let tempfileList = files;
      Array.from(fileList).map((file) => {
        if (!file.type.match(/image/gim)) return;
        tempfileList.push(file);
      });
      setFiles(tempfileList);
      getFiles && getFiles(tempfileList);
      renderImages(imageList, tempfileList);
    },
    [files, getFiles, imageList, renderImages]
  );

  const removeDropFiles = React.useCallback(
    (index: number, e) => {
      e.preventDefault();
      e.stopPropagation();
      let tempfileList = files;
      tempfileList.splice(index, 1);
      setFiles(tempfileList);
      getFiles && getFiles(tempfileList);
      renderImages(imageList, tempfileList);
    },
    [files, getFiles, imageList, renderImages]
  );

  const handleDrop = React.useCallback(
    (e: DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setDrag(false);
      if (e?.dataTransfer?.files && e.dataTransfer.files.length > 0) {
        handleDropFiles(e.dataTransfer.files);
        e.dataTransfer.clearData();
        setDragCounter(0);
      }
    },
    [handleDropFiles]
  );

  const inputFileWatch = React.useCallback(
    ({ target }: React.ChangeEvent<HTMLInputElement>) =>
      target.files && handleDropFiles(target.files),
    [handleDropFiles]
  );

  const handleFileClick = () => refInput.current?.click();

  const getFileImage = (file: File) => URL.createObjectURL(file);

  const renderPlaceholder = React.useCallback(() => {
    const placeholder = [...Array(6).keys()].map((i) => (
      <S.ImageWrapper key={i}>
        <S.NoImage>
          <AddPhoto fill={colors.orange} />
        </S.NoImage>
      </S.ImageWrapper>
    ));
    setImageList(placeholder);
  }, []);

  React.useEffect(() => {
    renderPlaceholder();
  }, [renderPlaceholder]);

  React.useEffect(() => {
    const container = ref.current;
    container?.addEventListener('dragenter', handleDragIn);
    container?.addEventListener('dragleave', handleDragOut);
    container?.addEventListener('dragover', handleDrag);
    container?.addEventListener('drop', handleDrop);

    return () => {
      container?.removeEventListener('dragenter', handleDragIn);
      container?.removeEventListener('dragleave', handleDragOut);
      container?.removeEventListener('dragover', handleDrag);
      container?.removeEventListener('drop', handleDrop);
    };
  }, [handleDragIn, handleDragOut, handleDrop]);

  return (
    <S.Container ref={ref} onClick={handleFileClick}>
      <input
        ref={refInput}
        onChange={inputFileWatch}
        value=""
        type="file"
        style={{ display: 'none' }}
        multiple
      />
      {drag && (
        <S.DropzoneContainer>
          <S.DropzoneWrapper>
            <S.DropzoneLabel>Arraste e Solte</S.DropzoneLabel>
          </S.DropzoneWrapper>
        </S.DropzoneContainer>
      )}
      <S.ImageContainer>{imageList}</S.ImageContainer>
    </S.Container>
  );
};

export { ImageDnD };
