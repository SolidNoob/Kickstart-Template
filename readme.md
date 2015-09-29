<h1>Kickstart Template</h1>

<p>Simple directory structure to kickstart project with Bootstrap 3 and Gulp.</p>

<p>
	Gulp is used to compile, minify and concat all css files (resources/css and resources/scss) in a single one (public/css/app.min.css). <br/>
	The same goes for js (resources/js, wich is compressed into a single public/js/app.min.js file.
</p>

<p>
	public/ : public files compiled and minified (css/app.min.css and js/app.min.js) <br/>
	resources/  : uncompressed ressources files
</p>

<p>
default gulp tasks are:
	<ul>
		<li>lint resources/js/app.js file</li>
		<li>compile resources/scss/app.scss file into resources/css/app.css</li>
		<li>uglify and concat all js files in resources/js to public/js/app.min.js</li>
		<li>minify and concat all css files in resources/css to public/css/app.min.css</li>
		<li>watch over changes in resources/app.js and resources/app.css</li>
	</ul>
</p>

<p>Note: package.json : list all npm dependencies, so just run npm install</p>
