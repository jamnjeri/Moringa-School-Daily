class CategoriesController < ApplicationController

    #GET categories 

    def index
        categories = Category.all
        render json: categories, status: :ok
    end

    #POST /categories

    def create 
        current_user = User.find_by(session[:user_id])
        if current_user
            unless current_user.technicalwriter?
                category = Category.create(params.permit[:name])
                render json: category, status: :created
            else
                render json: { error: "Unauthorized access" }, status: :forbidden
            end
        else
            render json: { error: 'You need to be logged in to post an article '}, status: :unauthorized 
        end
           
        
    end

    # DELETE /categories/:id
    
    def destroy
        current_user = User.find_by(sessions[:id])
        category = Category.find(params[:id])
        if category
            unless current_user.technicalwriter?
                category.destroy
                head :no_content
            else
                render json: { error: "Unauthorized access" }, status: :forbidden
            end
        else
            render json: { error: "category not found"}, status: :not_found
        end
    end
end
