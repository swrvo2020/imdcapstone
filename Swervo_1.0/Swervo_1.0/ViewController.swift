//
//  ViewController.swift
//  Swervo_1.0
//
//  Created by Christian Ignacio on 1/27/20.
//  Copyright © 2020 Christian Ignacio. All rights reserved.
//

import UIKit
//import Firebase


class ViewController: UIViewController {

    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
    }
    
    

    @IBAction func loginTapped(_ sender: UIButton)
    {
        // Get the default auth UI object
        
        let authUI = FUIAuth.defaultAuthUI()
        
        
        
        guard authUI != nil else
        {
            // Log the error
            return
        }
        
        // Set ourselves as the delegate
        authUI?.delegate = self
        
        // Get a reference to the auth UI view controller
        let authViewController = authUI!.authViewController()
        
        // Show it
        present(authViewController, animated: true, completion: nil)
    }
    
    
    
}

extension ViewController: FUIAuthDelegate
{
    func authUI(authUI: FUIAuth, didSignInWith authDataResult:
        AuthDataResult?, error: Error?)
    {
        // Check if there was an error
        guard error == nil else{
            // Log the error
            return
            
        }
    
        if error != nil
        {
            // Log error
            return
        }
        
        // authDataResult.user.uid
        
        performSegue(withIdentifier: "goHome", sender: self)
    }
}
