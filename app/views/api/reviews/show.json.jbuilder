json.set! @review.id do 
    json.extract! @review, :id, :rating, :body, :created_at 
    json.author @author_name
end