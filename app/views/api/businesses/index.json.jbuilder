@businesses.each do |business|
    json.set! business.id do 
        json.extract! business, :id, :name, :description, :lat, :long
        json.reviews do 
            json.array! business.reviews do |review|
                json.extract! review, :id, :rating, :body, :created_at 
                json.author review.user.username
                json.photoUrl review.photos.map { |file| file.url}
            end
        end
    end
end