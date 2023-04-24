class CreateProfiles < ActiveRecord::Migration[7.0]
  def change
    create_table :profiles do |t|
      t.string :full_name, null: false
      t.text :bio, null: false
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end



email = UserMailer.new_post_notification(user, post).deliver_now