json.business do
    json.set! @business.id do 
        json.extract! @business, :name, :description, :lat, :long
        json.photoUrls @business.reviews[0].photos.map { |file| file.url}
    end
end

json.reviews do 
    @business.reviews.each do |review|
        json.set! review.id do 
            json.extract! review, :id, :rating, :body, :created_at 
            json.author review.user.username
            json.photoUrl review.photos.map { |file| file.url}
        end
    end
end