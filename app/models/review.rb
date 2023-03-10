class Review < ApplicationRecord
    validates :body, :rating, :business, :author_id, presence: true
    validates :business, uniqueness: {scope: :author_id}

    belongs_to :user,
    primary_key: :id,
    class_name: :User,
    foreign_key: :author_id

    belongs_to :business,
    primary_key: :id,
    class_name: :Business,
    foreign_key: :business_id

    has_many_attached :photos

end
