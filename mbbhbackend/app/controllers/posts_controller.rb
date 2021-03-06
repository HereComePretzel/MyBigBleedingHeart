class PostsController < ApplicationController

    def index
        posts = Post.all
        render json: posts
    end

    def create
        post = Post.create(post_params)
        render json: post
    end 

    def update
        post = Post.find(params[:id])
        post.update(post_params)
        render json: post 
    end


end

private 

def post_params
    params.require(:post).permit(:user_id, :date, :number, :goodThoughts, :badThoughts, :suicidalThoughts, :medsTaken, :goals, :notes, :happyMemory)
end 


