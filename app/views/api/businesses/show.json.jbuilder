json.set! @business.id do 
    json.extract! @business, :name, :description, :lat, :long
    json.reviews do 
        json.array! @business.reviews do |review|
            json.extract! review, :id, :rating, :body, :created_at 
            json.author review.author.username
        end
    end
end