@businesses.each do |business|
    json.set! business.id do 
        json.extract! @business, :name, :description, :lat, :long
    end
end