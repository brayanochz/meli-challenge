export interface Struct {
    number: number;
    unit: string;
}

export interface Value {
    id: string;
    name: string;
    struct: Struct;
}

export interface SaleTerm {
    id: string;
    name: string;
    value_id: string;
    value_name: string;
    value_struct: Struct;
    values: Value[];
    value_type: string;
}

export interface Picture {
    id: string;
    url: string;
    secure_url: string;
    size: string;
    max_size: string;
    quality: string;
}

export interface Shipping {
    mode: string;
    methods: any[];
    tags: string[];
    dimensions?: any;
    local_pick_up: boolean;
    free_shipping: boolean;
    logistic_type: string;
    store_pick_up: boolean;
}

export interface City {
    id?: string;
    name: string;
}

export interface State {
    id: string;
    name: string;
}

export interface Country {
    id: string;
    name: string;
}

export interface Neighborhood {
    id: string;
    name: string;
}

export interface SearchLocation {
    neighborhood: Neighborhood;
    city: City;
    state: State;
}

export interface SellerAddress {
    city: City;
    state: State;
    country: Country;
    search_location: SearchLocation;
    id: number;
}

export interface Location {
}

export interface AttributeValue {
    id: string;
    name: string;
    struct: Struct;
}

export interface Attribute {
    id: string;
    name: string;
    value_id: string;
    value_name: string;
    value_struct: Struct;
    values: AttributeValue[];
    attribute_group_id: string;
    attribute_group_name: string;
    value_type: string;
}

export interface ItemDTO {
    id: string;
    site_id: string;
    title: string;
    subtitle?: any;
    seller_id: number;
    category_id: string;
    official_store_id: number;
    price: number;
    base_price: number;
    original_price?: any;
    currency_id: string;
    initial_quantity: number;
    available_quantity: number;
    sold_quantity: number;
    sale_terms: SaleTerm[];
    buying_mode: string;
    listing_type_id: string;
    start_time: Date;
    stop_time: Date;
    condition: string;
    permalink: string;
    thumbnail_id: string;
    thumbnail: string;
    secure_thumbnail: string;
    pictures: Picture[];
    video_id?: any;
    descriptions: any[];
    accepts_mercadopago: boolean;
    non_mercado_pago_payment_methods: any[];
    shipping: Shipping;
    international_delivery_mode: string;
    seller_address: SellerAddress;
    seller_contact?: any;
    location: Location;
    coverage_areas: any[];
    attributes: Attribute[];
    warnings: any[];
    listing_source: string;
    variations: any[];
    status: string;
    sub_status: any[];
    tags: string[];
    warranty: string;
    catalog_product_id: string;
    domain_id: string;
    parent_item_id?: any;
    differential_pricing?: any;
    deal_ids: string[];
    automatic_relist: boolean;
    date_created: Date;
    last_updated: Date;
    health?: any;
    catalog_listing: boolean;
    channels: string[];
}
