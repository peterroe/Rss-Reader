#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]

use tauri::api::http::{ HttpRequestBuilder, ResponseType, ClientBuilder };

fn main() {
  tauri::Builder::default()
  .run(tauri::generate_context!())
  .expect("error while running tauri application");
  
}