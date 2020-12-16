class CreatePosts < ActiveRecord::Migration[6.0]
  def change
    create_table :posts do |t|
      t.integer :user_id
      t.string :date
      t.integer :number
      t.text :good_thoughts
      t.text :bad_thoughts
      t.boolean :suicidal_thoughts, null: false, default: false
      t.boolean :meds_taken, null: false, default: false
      t.text :goals
      t.text :notes
      t.text :happy_memory

      t.timestamps
    end
  end
end
