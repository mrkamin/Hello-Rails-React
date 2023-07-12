Rails.application.routes.draw do
  root 'root#index'

  get '/api/v1/greeting', to: 'greetings#greeting'
end
