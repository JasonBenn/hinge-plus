guard 'livereload' do
  watch(%r{app/views/.+\.(erb|haml|slim)$})
  watch(%r{app/helpers/.+\.rb})
  watch(%r{public/.+\.(css|js|html)})
  watch(%r{config/locales/.+\.yml})
  # Rails Assets Pipeline
  watch(%r{(app|vendor)/assets/.+\.(less|css|js|html)}) { |m| "/assets/#{m[3]}" }
  # watch(%r{(app|vendor)(/assets/\w+/(.+\.(css|js|html|png|jpg))).*})
end
