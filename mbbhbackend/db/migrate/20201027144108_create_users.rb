class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :username
      t.string :password_digest
      t.string :email 
      t.string :name
      t.string :birthday
      t.integer :age
      t.string :gender
      t.string :sexual_orientation
      t.integer :zipcode

      t.timestamps
    end
  end
end
