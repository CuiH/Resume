deploy:
	rm -r ~/tmp/dist
	git checkout master
	node index.js
	git add --all
	git commit -m "update source"
	cp -r dist/ ~/tmp/
	git checkout gh-pages
	rm -r ./*
	cp -r ~/tmp/dist/* ./
	git add --all
	git commit -m "deploy resume"
	git push origin gh-pages
	git checkout master
	git push origin master