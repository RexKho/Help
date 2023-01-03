class Api::ReviewsController < ApplicationController 

    def create 
        @review = Review.new(review_params)
        @review.author_id = current_user.id 
        if @review.save 
            @author_name = @review.author.username
            render :show
        else 
            render json: {errors: @review.errors.full_messages }, status: :unauthorized
        end
    end

    def destroy 
        @review = Review.find(params[:id])
        @author_name = @review.author.username 
        if @review.author_id == current_user.id 
            if @review.destroy 
                render :show 
            else 
                render json: {errors: "unauthorized"}, status: :unauthorized
            end
        else 
            render json: {errors: "unauthorized"}, status: :unauthorized 
        end
    end

    private 

    def review_params 
        params.require(:review).permit(:rating, :body, :business_id)
    end
end