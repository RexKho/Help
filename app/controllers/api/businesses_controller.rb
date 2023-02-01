class Api::BusinessesController < ApplicationController
    def index 
        # @businesses = Business.all 

        search = params[:search].downcase.split(" ") if params[:search]

        @filtered_businesses = []

        if params[:search]
            search.each do |term|
                @filtered_businesses << Business.where("LOWER(name) LIKE ?", "%#{term}%")
            end
        else
            @filtered_businesses = Business.all
        end

        @business = @filtered_businesses
        render :index
    end

    def show 
        @business = Business.find(params[:id])
        render :show
    end

    private 
    def business_params 
        params.require(:business).permit(:id, :name, :description, :lat, :long)
    end
end