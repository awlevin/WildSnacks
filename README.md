# WildHacks

## How to test sites

First open terminal/command prompt and get to directory of website

### Python
 
- Make sure you have python by running `python --version`
- Run `python -m SimpleHTTPServer`
  - it will defaut at port 8000 to see page
  - go to [http://localhost:8000/gitgood_org](http://localhost:8000/gitgood_org)
- Just add the path of each folder to view it
- To change to a different port, for instance, port 9001
  - run `python -m SimpleHTTPServer 9001`
	
### NodeJS

- Make sure you have node by running `node -v`
- Run `sudo npm install -g http-server`
  - the `-g` means global so you only need to run this once on the server
- Get to directory of website
- Run `http-server`
  - it will defaut at port 8080
  - go to [http://localhost:8080/gitgood_org](http://localhost:8080/gitgood_org) to see page
- Just add the path of each folder to view it
- To change to a different port, for instance, port 9001
  - run `http-server -p 9001`

## Adding a new site

Make all folders the name of the domain with a `_` underscore in replace of the `.` dot

Also here is a quick HTML template

```
<!DOCTYPE html>
<html>
<head>
	<title>GitGood.org</title>
</head>
<body>
	TEST
</body>
</html>
```