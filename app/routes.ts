import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
  layout("layouts/mainLayout.tsx", [
    index("routes/home.tsx"),
    route("/shop", 'routes/shop.tsx'),
    route("/about", 'routes/about.tsx'),
    route("/contact", 'routes/contact.tsx')
  ]),
  route( "/termsConditions" ,"routes/termsConditions.tsx"),
  route( "/returnPolicy" ,"routes/returnPolicy.tsx")
] satisfies RouteConfig;
