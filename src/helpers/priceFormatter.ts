// Format number to default Brazillian currency BRL (R$ 9,99)
export const priceFormatter = (value: number) =>
  new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
