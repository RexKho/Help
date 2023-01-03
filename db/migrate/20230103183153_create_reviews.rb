class CreateReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :reviews do |t|
      t.string :body, null: false, :limit => 1500
      t.integer :rating, null: false, :inclusion => {in: 0..5}
      t.references :business, null: false, foreign_key: true 
      t.references :author, null: false, foreign_key: {to_table: :users}, index: false 
      t.index [:author_id, :business_id], unique: true
      t.timestamps
    end
  end
end
