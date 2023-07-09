export interface MainLayoutProps {
  children: React.ReactNode;
  title?: string;
}

export interface SignLayoutProps {
  children: React.ReactNode;
}

export interface DefineLocation {
  signin: boolean;
  signup: boolean;
}
