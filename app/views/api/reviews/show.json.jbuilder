json.set! @review.id do 
    json.extract! @review, :id, :rating, :body, :created_at, :business_id, :author_id
    json.author @author_name
end

# json.average_rating @review.business.average_rating