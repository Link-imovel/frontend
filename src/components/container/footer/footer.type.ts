interface FooterHref {
  label: string;
  url: string;
}

interface FooterProps {
  label: string;
  links?: FooterHref[];
}

export type { FooterProps, FooterHref };
