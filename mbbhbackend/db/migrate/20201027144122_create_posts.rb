class CreatePosts < ActiveRecord::Migration[6.0]
  def change
    create_table :posts do |t|
      t.integer :user_id
      t.string :date
      t.integer :number
      t.text :goodThoughts
      t.text :badThoughts
      t.boolean :suicidalThoughts, null: false, default: false
      t.boolean :medsTaken, null: false, default: false
      t.text :goals
      t.text :notes
      t.text :happyMemory

      t.timestamps
    end
  end
end
