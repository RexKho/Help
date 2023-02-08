# if @businesses.length > 1 
    @businesses.each do |business|
        json.set! business.id do 
            json.extract! business, :id, :name, :description, :lat, :long
            json.photoUrls business.reviews[0].photos.map { |file| file.url}
        end
    end
# end

# if @businesses.length == 1 
#     # json.(@businesses, :id, :name, :description, :lat, :long)
#     business = @businesses[0]
#     json.set! business.id do
#         json.extract! business, :id, :name, :description, :lat, :long
#         json.photoUrls business.reviews[0].photos.map { |file| file.url}
#     end
# end
