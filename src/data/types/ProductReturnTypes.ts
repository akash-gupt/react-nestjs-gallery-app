export type ProductReturnType = {
  id: string;
  product_return_id: string;
  order_id: string;
  order_number: string;
  seller_id: string;
  return_order_number: string;
  tcin: string;
  external_id: string;
  quantity: number;
  return_reason: string;
  return_date: string;
  is_online: boolean;
  created: string;
  created_by: string;
  tracking_data: TrackingDataType[];
};

export type TrackingNumberType = {
  tracking_number: string;
};

export type TrackingDataType = {
  bill_of_lading: string;
  crc_received_date: string;
  license_plate: string;
  scac: string;
  ship_date: string;
  store_physical_disposition: string;
  tracking_number: string;
};
