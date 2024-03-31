using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class SmartBallBallController : MonoBehaviour
{
    // Start is called before the first frame update
    void Start()
    {
        this.GetComponent<Rigidbody>().AddForce(new Vector3(0, 1000 + Random.Range(3000, 5000), 0));
        Debug.Log("hoge");
    }

    // Update is called once per frame
    void Update()
    {

    }
}
