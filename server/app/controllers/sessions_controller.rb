class SessionsController < ApplicationController
    # Login
    def create
        user = User.find_by(email: user_params[:email])
        if user && user.authenticate(user_params[:password])
            session[:user_id] = user.id
            render json: user, status: :ok
        else
            render json: { errors: "Invalid username or password"}, status: :unauthorized
        end
    end
    
    # Delete
    def destroy
        session.delete :user_id
        head :no_content
    end

    private

    def user_params
        params.require(:user).permit(:email, :password)
    end

end
