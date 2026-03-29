export type RootDrawerParamList = {
  Explore: undefined;
  StartCampaign: undefined;
  MyCampaigns: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootDrawerParamList {}
  }
}
