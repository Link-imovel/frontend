class Formatters {
  static formatRegistry = (value: string): string => {
    const fixedValue = value.replace(/[^0-9]/, '');
    return fixedValue.length > 11
      ? fixedValue.replace(
          /^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g,
          '$1.$2.$3/$4-$5'
        )
      : fixedValue.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4');
  };

  static formatPhone = (v: string): string => {
    v = v.replace(/\D/g, '');
    v = v.replace(/^(\d{2})(\d)/g, '($1) $2');
    v = v.replace(/(\d)(\d{4})$/, '$1-$2');
    return v;
  };

  static formatZipCode = (value: string): string => {
    value = value.replace(/\D/g, '');
    value = value.replace(/^(\d{5})(\d)/g, '$1-$2');
    return value;
  };

  static formatPrice = (value: string): string => {
    value = value.replace('.', '').replace(',', '').replace(/\D/g, '');

    const options = { minimumFractionDigits: 2 };
    const result = new Intl.NumberFormat('pt-BR', options).format(
      parseFloat(value) / 100
    );

    return 'R$ ' + result;
  };
}

export { Formatters };
