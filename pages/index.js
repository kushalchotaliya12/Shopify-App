import { Heading, Page } from "@shopify/polaris";

const Index = () => (
  <Page
    title="Product"
    primaryAction={{
      content:'Save',
      onAction: () => console.log('clicked')
    }}
  />
);

export default Index;
