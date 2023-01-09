
    json.extract! @review, :id, :rating, :body, :created_at, :business_id, :author_id
    json.author @author_name


