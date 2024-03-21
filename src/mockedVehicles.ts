import axios from "axios";

/**
 * Mocked vehicles
 *
 * @todo load these from the Vyro GraphQL API
 *
 * API Details:
 *
 * Endpoint: https://hasura.vyro.com.au/v1/graphql
 * Query:
 *
 * query GetStockedVehicle {
 *      stocked_vehicles(where: { is_listed: { _eq: true } }, limit: 6) {
 *          name
 *          condition
 *          media
 *          is_sold
 *      }
 * }
 *
 * Note: This is a public API. No credentials needed.
 *
 * You can interact with the GraphQL API using whatever framework or approach you wish. Fetch, Apollo, whatever.
 **/

export type VehicleType = {
  code: string;
  name: string;
  condition: "new" | "used" | "demo";
  media: {
    src: string;
    placement: "featured" | "gallery";
    alt: string;
  }[];
  is_sold: boolean;
};

export const getMockedVehicles = async (): Promise<VehicleType[]> => {
  const response = await axios({
    url: "https://hasura.vyro.com.au/v1/graphql",
    method: "POST",
    data: {
      query: `query GetStockedVehicle {
     stocked_vehicles(where: { is_listed: { _eq: true } }, limit: 6) {
         name
         condition
         media
         is_sold
         code
     }
    }`,
    },
  });

  return response.data?.data?.stocked_vehicles;
};

export const mockedVehicles = new Array(6).fill({
  name: "Polestar 2",
  condition: "new",
  media: [
    {
      src: "https://vyro-prod-assets-cf.imgix.net/public/polestar/2/standard-range-single-motor/thunder/_/charcoal-embossed-textile-with-3d-etched-deco/19-5-double-spoke-black-diamond-cut-alloy-wheel/exterior/angle-0.jpg?w=764&h=534&auto=format&fit=crop",
      alt: "Polestar 2",
      placement: "featured",
    },
  ],
  is_sold: false,
});
