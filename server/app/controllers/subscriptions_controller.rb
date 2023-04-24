class SubscriptionsController < ApplicationController

    # POST /subscriptions Subscribe to article categories
  
    def create
        current_user = User.find_by(session[:user_id])
          if current_user
            params[:category_ids].map do |cat_id|
            subscription = Subscription.create(user: current_user, category_id: cat_id.to_i)
            render json: subscription, status: :accepted, notice: "Subscriptions saved successfully."
          end
          
        else
          render json:subscription.errors.full_messages, status: :unprocessable_entity
      
          
        end
        
    # DELETE /subscription Unsubscribe from category
  
        def destroy
          current_user = User.find_by(session[:user_id])
          subscription = Subscription.find(params[:id])
          if current_user && current_user == Subscription.user
            subscription.destroy
            head :no_content
          else 
            render json: subscription.errors, status: :unprocessable_entity
          end
  
  
        end
      end

end
