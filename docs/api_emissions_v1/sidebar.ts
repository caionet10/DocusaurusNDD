import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "category",
      label: "CIOT",
      items: [
        {
          type: "doc",
          id: "api_emissions_v1/ciot-get-all",
          label: "Listagem de CIOT's",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Pedágio",
      items: [
        {
          type: "doc",
          id: "api_emissions_v1/toll-get-all",
          label: "Listagem de Pedágios",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
