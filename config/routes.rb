Rails.application.routes.draw do
  get 'sidebar', to: 'shared#sidebar'
  root  'dashboard#index'
end
