export interface VendorsApiResponse {
  render_type: number;
  status: boolean;
  data: VendorsApiData;
}

export interface VendorsApiData {
  count: number;
  open_count: number;
  finalResult: FinalResult[];
  extra_sections: ExtraSections;
  meta_tags: MetaTags;
}

export interface ExtraSections {
  categories: Categories;
  filters: Filters;
  pickup: Pickup;
  render_type: number;
}

export interface Categories {
  single_choice: boolean;
  data: unknown;
  open: boolean;
}

export interface Filters {
  sections: Section[];
  top: Top;
}

export interface Section {
  section_name: string;
  section_name_fa: string;
  data: SectionDatum[];
  description?: string;
  open: boolean;
  suggest: boolean;
  exclude_in_pickup: boolean;
}

export interface SectionDatum {
  image: null;
  title: string;
  value: string;
  single_choice: boolean;
  selected: boolean;
  kind: string;
  description?: string;
  open: boolean;
  exclude_in_pickup: boolean;
  suggest?: boolean;
  badge?: string;
  suggested_sort?: number;
}

export interface Top {
  open: boolean;
  data: TopDatum[];
}

export interface TopDatum {
  image: null;
  title: string;
  value: string;
  single_choice: boolean;
  selected: boolean;
  kind: string;
  open: boolean;
  exclude_in_pickup: boolean;
}

export interface Pickup {
  active: boolean;
  filter_text: string;
  is_new: boolean;
  open: boolean;
}

export interface FinalResult {
  type: Type;
  data: IVendor;
}

export interface IVendor {
  id: number;
  vendorCode: string;
  noOrder: boolean;
  title: string;
  description: string;
  rate: number;
  rating: number;
  logo: string;
  defLogo: string;
  taxEnabled: boolean;
  taxIncluded: boolean;
  taxEnabledInProducts: boolean;
  taxEnabledInPackaging: boolean;
  taxEnabledInDeliveryFee: boolean;
  tax: number | null;
  serviceFee: number;
  deliveryArea: string;
  discount: number;
  isOpen: boolean;
  minDeliveryFee: number;
  maxDeliveryFee: number;
  deliveryTime: number;
  paymentTypes: number[];
  minOrder: number;
  address: string;
  phone: string;
  website: string;
  status: number;
  lat: number;
  lon: number;
  restaurantClass: string;
  foodTypes: unknown;
  restaurantTypes: unknown;
  isFavorite: boolean;
  priority: number;
  city: City;
  area: string;
  commentCount: number;
  recommendedFor: string;
  establishment: VendorType;
  mostPopularItems: string;
  costsForTwo: number;
  onlineOrder: boolean;
  voteCount: number;
  discountType: null;
  menuUrl: string;
  discountValue: number;
  discountForAll: boolean;
  containerFee: number;
  deliveryGuarantee: boolean;
  badges: Badge[];
  discountStartHour1: string;
  discountStopHour1: string;
  discountStartHour2: string;
  discountStopHour2: string;
  discountValueForView: number;
  coverPath: string;
  cuisinesArray: CuisinesArray[];
  preOrderEnabled: boolean;
  preorderToday: PreorderToday;
  vendorType: VendorType;
  childType: VendorType;
  budgetClass: BudgetClass;
  vendorTypeTitle: string;
  isZFExpress: boolean;
  deliveryFee: number;
  backgroundImage: string;
  backgroundImageCustom: string;
  has_coupon: boolean;
  coupon_count: number;
  best_coupon: string;
  has_first_coupon: boolean;
  userImage: UserImage[];
  menuImage: unknown;
  countReview: number;
  countOfUserImages: number;
  deliveryFeeDiscount: number;
  trendingScore: number;
  delay: string;
  deliver: boolean;
  eta: number;
  min_eta: number;
  max_eta: number;
  open_at_eta: boolean;
  action: string;
  has_delay: boolean;
  delay_time: number;
  total_time: number;
  bid: boolean;
  superTypeAlias: VendorType;
  is_food_party: boolean;
  is_market_party: boolean;
  click_id: null;
  cpc_campaign_hash: null;
  cpc_spot: null;
  is_ecommerce: boolean;
  is_economical: boolean;
  is_grocery_vip: boolean;
  is_grocery_returnable: boolean;
  is_grocery_economic: boolean;
  status_title: StatusTitle;
  status_text: string;
  status_description: string;
  has_cashback: boolean;
}

export interface Badge {
  title: string;
  description: string;
  image: string;
  white_image: string;
}

export enum BudgetClass {
  بهصرفه = "به صرفه",
  مناسب = "مناسب",
}

export enum VendorType {
  Fastfood = "FASTFOOD",
  Foodcourt = "FOODCOURT",
  Restaurant = "RESTAURANT",
}

export enum City {
  تهران = "تهران",
}

export interface CuisinesArray {
  id: number;
  title: string;
}

export interface PreorderToday {
  weekday: string;
  name: string;
  startHour: string;
  intervals: null;
}

export enum StatusTitle {
  Active = "ACTIVE",
}

export interface UserImage {
  id: number;
  description: null;
  fileName: string;
  thumbNailSource: string;
  likeCount: number;
  commentCount: number;
  timeDifference: number;
  imageType: ImageType;
  userType: UserType;
}

export enum ImageType {
  MenuCaptureImage = "MENU_CAPTURE_IMAGE",
  ProductImage = "PRODUCT_IMAGE",
}

export enum UserType {
  Zoodfood = "ZOODFOOD",
}

export enum Type {
  Text = "TEXT",
  Vendor = "VENDOR",
}

export interface MetaTags {
  header: string;
  title: string;
  description: string;
}
