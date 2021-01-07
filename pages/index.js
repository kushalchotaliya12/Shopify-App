import { ResourcePicker } from "@shopify/app-bridge-react";
import { Heading, Page } from "@shopify/polaris";

class Index extends React.Component {
  state = {
    open: false
  }
  render() {
    return (
      <Page
        title="Product Selector"
        primaryAction={{
          content: "Add Product",
          onAction: () => this.setState({open:true})
        }}
      >
        <ResourcePicker
          resourceType="Product"
          open={this.state.open}
          onCancel={() => this.setState({open: false})}
          onSelection={(resources) => this.handleSelection(resources)}
        />
      </Page>
    );
  }
  handleSelection(resources){
    const idsfromResources = resources.selection.map((product) => product.id);
    this.setState({open:false})
    console.log(idsfromResources);
  }
}

export default Index;
