json.pins [@pin] do |pin| 
  json.id pin.id
  json.pinterest_id pin.pinterest_id
  json.title pin.title
  json.optional_info pin.optional_info
  json.source_url pin.source_url
  json.img_url pin.img_url
  json.like_count pin.like_count
  json.category_name pin.category.name
end