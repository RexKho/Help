class Api::ReviewsController < ApplicationController 
    wrap_parameters include: Review.attribute_names + ['businessId','authorId']
    def create 
        @review = Review.new(review_params)
        @review.author_id = current_user.id 
        if @review.save 
            # business = Business.find_by_id(@review.business_id)
            # business.add_review(@review)
            user = User.find_by_id(@review.author_id)
            @author_name = user.username
            render :show
        else 
            render json: {errors: @review.errors.full_messages }, status: :unauthorized
        end
    end

    def update 
        @review = Review.find(params[:id])
        if @review.update(review_params)
            render :show
            # render `/api/businesses/${businessId}`
        else 
            render json: {errors: @review.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def destroy 
        @review = Review.find(params[:id])
        user = User.find_by_id(@review.author_id)
        @author_name = user.username
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
        params.require(:review).permit(:rating, :body, :business_id, :author_id)
    end
end