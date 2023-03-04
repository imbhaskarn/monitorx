# System Info Monitor CLI

The System Info Monitor CLI is a command-line interface tool that allows you to monitor system information on your computer in real-time. This npm package provides an easy-to-use interface for displaying a variety of system information such as CPU usage, memory usage, disk usage, network usage, and more.

## Installation

To install the System Info Monitor CLI, you can use npm:


This will install the package globally, making the `system-info` command available in your terminal.

`npm install -g monitorx`

## Usage

To use the System Info Monitor CLI, simply open your terminal and type:

`monitorx -h`

This will start the monitoring process and display a real-time view of your system information.

You can customize the output by specifying the modules you want to include in the monitoring process. For example, if you only want to monitor CPU usage and memory usage, you can use the following command:

`monitorx cpu memory`


This will display only the CPU and memory usage information in real-time.

## Available Modules

The following modules are available for monitoring:

- `cpu`: Displays the current CPU usage.
- `memory`: Displays the current memory usage.
- `disk`: Displays the current disk usage.
- `network`: Displays the current network usage.
- `processes`: Displays the current running processes.

You can specify any combination of these modules when starting the monitoring process.

## Contributing

Contributions to this package are always welcome! If you encounter any issues or have suggestions for new features, please open an issue on the [GitHub repository](https://github.com/imbhaskarn/monitorx) or submit a pull request.

Before contributing, please read the [contribution guidelines](CONTRIBUTING.md) to ensure that your changes align with the goals of the project.

## License

This package is licensed under the [MIT License](LICENSE).
