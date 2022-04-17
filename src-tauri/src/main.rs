#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]

use tauri::api::http::{ HttpRequestBuilder, ResponseType, ClientBuilder };

fn main() {
  tauri::Builder::default()
  .run(tauri::generate_context!())
  .expect("error while running tauri application");
  
  run();
}

async fn run() {
  println!("Hello, world!");
  let client = ClientBuilder::new()
    .max_redirections(3)
    .build()
    .unwrap();
  let mut request_builder = HttpRequestBuilder::new("GET","https://rsshub.app/axis-studios/work/full-service-cg-production").unwrap();
  let request = request_builder.response_type(ResponseType::Text);

  if let Ok(response) = client.send(request).await {
    println!("hello, world!");
  } else {
    println!("error");
  }
}