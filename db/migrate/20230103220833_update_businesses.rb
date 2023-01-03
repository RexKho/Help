class UpdateBusinesses < ActiveRecord::Migration[7.0]
  def change
    add_column :businesses, :description, :string
    add_column :businesses, :lat, :float, null: false
    add_column :businesses, :long, :float, null: false
  end
end
