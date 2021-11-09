class Formatters {
  static formatRegistry = (value: string): string => {
    const fixedValue = value.replace(/[^0-9]/, '');
    return fixedValue.length > 11
      ? fixedValue.replaceAll(
          /^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g,
          '$1.$2.$3/$4-$5'
        )
      : fixedValue.replaceAll(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4');
  };
}

export { Formatters };
