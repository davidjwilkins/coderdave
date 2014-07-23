package main

import (
	"fmt"
	"html/template"
	"net/http"
)

func handler(w http.ResponseWriter, r *http.Request) {
	t, err := template.ParseFiles("tmpl/layout.html", "tmpl/navbar.html")
	if err != nil {
		fmt.Println(err)
	}
	t.Execute(w, nil)
}

func main() {
	http.HandleFunc("/", handler)
	http.Handle("/assets/", http.FileServer(http.Dir("/git/go/")))
	http.Handle("/views/", http.FileServer(http.Dir("/git/go/")))
	http.ListenAndServe(":80", nil)
}
