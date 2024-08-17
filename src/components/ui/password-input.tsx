import * as React from "react"
import {Eye, EyeOff} from "lucide-react"

import {cn} from "@/lib/utils"
import {Input, InputProps} from "./input"

export interface PasswordInputProps extends Omit<InputProps, 'type'> {
	showPasswordButton?: boolean
}

const PasswordInput = React.forwardRef<HTMLInputElement, PasswordInputProps>(
	({className, showPasswordButton = true, ...props}, ref) => {
		const [showPassword, setShowPassword] = React.useState(false)

		const togglePasswordVisibility = () => {
			setShowPassword(!showPassword)
		}

		return (
			<div className="relative">
				<Input
					type={showPassword ? "text" : "password"}
					className={cn("pr-10", className)}
					ref={ref}
					{...props}
				/>
				{showPasswordButton && (
					<button
						type="button"
						onClick={togglePasswordVisibility}
						className="absolute right-3 top-1/2 -translate-y-1/2"
						tabIndex={-1}
					>
						{showPassword ? (
							<EyeOff className="h-4 w-4 text-gray-500"/>
						) : (
							<Eye className="h-4 w-4 text-gray-500"/>
						)}
					</button>
				)}
			</div>
		)
	}
)

PasswordInput.displayName = "PasswordInput"

export {PasswordInput}