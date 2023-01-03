class Business < ApplicationRecord
    validates :name, presence: true 

    has_many :reviews,
    primary_key: :id,
    foreign_key: :business_id,
    class_name: :Review,
    dependent: :destroy

end
