import React from 'react';
import { useRouter } from 'next/router';

import { Home } from '@views/home';
import { HomeProps } from '@views/home/home.type';
import { CardProps } from '@components/generics/card/card.type';

const HomeContainer = (props: HomeProps): React.ReactElement => {
  const { BLogin, BLogo, BShowImovels } = props.header.buttons;

  const [cards, setCards] = React.useState<CardProps[]>([]);
  const [data, setData] = React.useState({});

  React.useEffect(() => {
    setCards([
      {
        variant: 'primary',
        size: 'small',
        publication: {
          userId: '1',
          homeId: '1',
          phone: '(41) 99119-9642',
          reserved: false,
          views: 3,
          virtualTour: 'https://google.com',
          rented: true,
          home: {
            id: '1',
            type: 'Casa',
            ref: '234120',
            totalArea: 145,
            value: 1267.2,
            room: 1,
            bedroom: 3,
            bathroom: 2,
            kitchen: 1,
            garage: 1,
            serviceArea: 1,
            buildAt: new Date('1990-12-12T00:00:00.000Z'),
            description: 'Maravilhosa casa localizada perto do parque.',
            images: [
              'https://via.placeholder.com/269x143?text=1',
              'https://via.placeholder.com/269x143?text=2',
              'https://via.placeholder.com/269x143?text=3',
            ],
            address: {
              id: '1',
              street: 'Rua General Luiz Carlos Pereira Tourinho',
              street2: '',
              number: 509,
              neighborhood: 'Campo de Santana',
              city: 'Curitiba',
              state: 'Paraná',
              zip: '81490-516',
              ibge: '2384920',
            },
          },
        },
        buttons: {
          BCircleWhatsApp: {
            callback: () => console.log(1),
          },
          BNavigation: {
            typeSize: 'small',
            callback: () => console.log(2),
          },
          BContact: {
            label: 'Contatar',
            callback: () => console.log(3),
          },
        },
      },
    ]);
  }, []);

  const router = useRouter();

  BLogo.callback = () => {
    console.log(1);
  };

  BLogin.callback = () => {
    console.log(2);
  };

  BShowImovels.callback = () => {
    router.push('list/anuncements');
  };

  const handleData = (fieldName: string, value: any) => {
    setData({ ...data, [fieldName]: value });
  };

  return (
    <Home
      userName="John"
      cards={cards}
      isLogged={false}
      {...props}
      handleData={handleData}
    />
  );
};

export default HomeContainer;
