@businesses.each do |business|
    json.set! business.id do 
        json.extract! business, :id, :name, :description, :lat, :long
        json.photoUrls business.reviews[0].photos.map { |file| file.url}
    end
end